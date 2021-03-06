import './dashboard.html';
import { Images } from '../../api/images/images.js';

//import {Suggestions} from '../../api/suggestions/suggestions.js';
let courseSub;
let clubSub;
Template.dashboard.onRendered(function () {
	Tracker.autorun(function () {
		Meteor.subscribe('files.images.all');
	});
});
Template.dashCategories.onRendered(function () {
	setTitle('Manage Categories');
});
Template.dashHome.onRendered(function () {
	setTitle('Home');
	Tracker.autorun(function () {
		Meteor.subscribe('posts');
		Meteor.subscribe('categories');
		Meteor.subscribe('blogCategories');
	});
});
Template.dashSuggestions.onRendered(function () {
	setTitle('Suggestion');
	Tracker.autorun(function () {
		Meteor.subscribe('suggestions');
	});
});
Template.dashOrganizations.onRendered(function () {
	setTitle('Manage Organizations');
	Tracker.autorun(function () {
		courseSub = Meteor.subscribeWithPagination('allCourses', 10);
		clubSub = Meteor.subscribeWithPagination('allClubs', 10);
	});
});
Template.dashUsers.onRendered(function () {
	setTitle('Manage Users');
	Tracker.autorun(function () {
		Meteor.subscribe('allUsers');
	});
});

Template.dashHome.helpers({
	'post': function () {
		return Posts.find({
			'meta.approved': false,
			'type': 'announcement',
			'meta.screeningStage': 0
		});
	},
	'blogPost': function () {
		return Posts.find({
			'meta.approved': false,
			'type': 'blog'
		});
	},
	'writer': function () {
		return Meteor.users.findOne({_id: this.author}).services.google.name;
	},
	'noImage': function () {
		return (this.subType === 'textOnly');
	},
	'imageLink': function () {
		try{
			return Images.findOne({_id: this.imgId}).link();
		}catch(e){
		}
	},
	'hasContent': function () {
		return this.subType !== 'imageOnly';
	},
	'draftedDate': function () {
		return moment(this.draftedDate).format("MMMM Do YYYY");
	},
	'releaseDate': function () {
		return moment(this.releaseDate).format("MMMM Do YYYY");
	}
});

Template.dashAnnouncements.helpers({
	'post': function () {
		return Posts.find({
			'meta.approved': true,
			'type': 'announcement'
		});
	},
	'blogPost': function () {
		return Posts.find({
			'type': 'blog'
		});
	},
	'writer': function () {
		return Meteor.users.findOne({_id: this.author}).services.google.name;
	},
	'noImage': function () {
		return (this.subType === 'textOnly');
	},
	'imageLink': function () {
		try{
			return Images.findOne({_id: this.imgId}).link();
		}catch(e){
		}
	},
	'hasContent': function () {
		return this.subType !== 'imageOnly';
	}
});

Template.dashSuggestions.helpers({
	'suggestion': function () {
		return Suggestions.find({});
	},
	'writer': function () {
		return Meteor.users.findOne({_id: this.author}).services.google.name;
	},
	'noImage': function () {
		return (this.imgId === null);
	},
	'imageLink': function () {
		try{
			return Images.findOne({_id: this.imgId}).link();
		}catch(e){
			//console.log('error getting photo from Images - dashboard')
		}
	},
	'draftedDate': function () {
		return moment(this.draftedDate).format("MMMM Do YYYY");
	}
});

Template.dashSuggestions.events({
	'click .btn-reject-suggestion': function (evt) {
		let obj = $(evt.target).closest($('.new-post'));
		let id = obj.attr('id');
		Meteor.call('suggestions.removeSuggestions', id, function (err) {
			if(err){
				alertError("Error Occurred When Removing Suggestion", err.message);
			}
		});
	}
});

Template.dashCategories.helpers({
	'category': function () {
		return Categories.find({});
	},
	'featured': function () {
		return (this.featured) ? 'Yes' : 'No';
	},
	'date': function () {
		return moment(this.createdDate).format("MMMM Do YYYY");
	},
	'blogCategory': function () {
		return BlogCategories.find({});
	}
});

Template.dashUsers.helpers({
	'userList': function () {
		return Meteor.users.find({});
	},
	'img': function () {
		return this.services.google.picture;
	},
	'name': function () {
		return this.services.google.name;
	},
	'id': function () {
		return this._id;
	},
	'userBanned': function () {
		return Roles.userIsInRole(this._id, 'banned');
	}
});

Template.dashOrganizations.helpers({
	'courses': function () {
		return Courses.find({});
	},
	'clubs': function () {
		return Clubs.find({});
	}
});

Template.dashHome.events({
	'click .new-post': function (evt) {
		let obj = $(evt.target).closest($('.new-post'));
		let id = obj.attr('id');
		Session.set('editingId', id);
		let info = Posts.findOne({_id: id});
		Session.set('dashEditorData', info);

		if(!$(evt.target).attr('class').includes('btn-reject') && !$(evt.target).attr('class').includes('btn-approve')){
			Modal.show('dashPostEditor');
		}
			
	},
	'click .btn-approve': function (evt) {
		let obj = $(evt.target).closest($('.new-post'));
		let id = obj.attr('id');
		Meteor.call('posts.approvePost', id, function (err) {
			if(err){
				alertError("Error Occurred When Approving Post", err.message);
			}
		});
		//Post on Facebook
		/*setupFacebook(function(err, response) {
         if (err) {
         console.log(err);
         } else {
         let post = Session.get('dashEditorData');
         let type = post.type;
         if (type === 'announcement') {
         let subType = post.subType;
         if (subType === 'textOnly') {
         postTextFacebook(post);
         } else if (subType === 'imageOnly') {
         postImageFacebook(post);
         } else {
         postTextImageFacebook(post);
         }
         }
         }
         });*/
	},
	'click .btn-reject': function (evt) {
		let obj = $(evt.target).closest($('.new-post'));
		let id = obj.attr('id');
		alertPrompt("Please give the reason of rejection", function (result) {
			if(result){
				Meteor.call('posts.rejectPost', id, result, function (err) {
					if(err){
						alertError("Error Occurred When Removing Post", err.message);
					}
				});
			}
		});

	}
});

Template.dashAnnouncements.events({
	'click .new-post': function (evt) {
		let obj = $(evt.target).closest($('.new-post'));
		let id = obj.attr('id');
		Session.set('editingId', id);
		let info = Posts.findOne({_id: id});
		Session.set('dashEditorData', info);

		if(!$(evt.target).attr('class').includes('btn-remove')){
			Modal.show('dashPostEditor');
		}

	},
	'click .btn-remove': function (evt) {
		evt.preventDefault();
		let obj = $(evt.target).closest($('.new-post'));
		let id = obj.attr('id');
		alertConfirm('Are you sure','This action cannot be reverted, if you don\'t want this post to show up in the list, we recommend you archive it.', function (accepted) {
			if(accepted){
				Meteor.call('posts.removePost', id, function (err) {
					if(err){
						alertError("Error Removing Post", "Please try again later.\n"+ err.message);
					}else{
						alertSuccess("Successfully Removed Post", "");
					}
				});
			}
		});
	}
});

Template.dashCategories.events({
	'click .btn-create-category': function (evt) {
		if($(evt.target).attr('data-category') === 'blog'){
			Session.set('editingBlogCategory', true);
		}else {
			Session.set('editingBlogCategory', false);
		}
		Modal.show('dashCategoryEditor');
	},
	'click .btn-delete-category': function (evt) {
		let obj = $(evt.target).closest($('.dash-category-container'));
		let type = obj.attr('data-category');
		let id = obj.attr('id');
		if(type === 'blog'){
			Meteor.call('blogCategory.remove', id, function (err) {
				if(err){
					alertError('Something Terrible Happened...', err.message);
				}
			});
		}else{
			Meteor.call('category.remove', id, function (err) {
				if(err){
					alertError('Something Terrible Happened...', err.message);
				}
			});
		}
	}
});

Template.dashUsers.events({
	'click .btn-modify-roles': function (evt) {
		let obj = $(evt.target).closest($('.dash-user-container'));
		let id = obj.attr('id');
		Session.set('editingUser', Meteor.users.findOne({_id: id}));
		Modal.show('dashRoleEditor');
	},
	'click .btn-ban-user': function (evt) {
		let obj = $(evt.target).closest($('.dash-user-container'));
		let id = obj.attr('id');
		alertPrompt("This doesn't have to happen. Please give a reason for the banning.",function (result) {
			if(result){
				Meteor.call('accounts.ban',id,result,function (err) {
					if(err){
						alertError("Failed to ban user", err.message);
					}else{
						alertSuccess("User has been successfully banned", "");
					}
				});
			}
		});
	},
	'click .btn-unban-user': function(evt){
		let obj = $(evt.target).closest($('.dash-user-container'));
		let id = obj.attr('id');
		alertConfirm("Are you sure?","You are about to unban this user.", function(result){
			if(result){
				Meteor.call('accounts.unban',id,function (err) {
					if(err){
						alertError("Failed to ban user", err.message);
					}else{
						alertSuccess("Success", "User has been successfully unbanned");
					}
				});
			}
		});
	},
	'click .user-expand': function(evt){
		$(evt.target).hide();
		$(evt.target).prev().show();
		$(evt.target).next().slideDown('500');
	},
	'click .user-hide': function(evt){
		$(evt.target).hide();
		$(evt.target).next().show();
		$(evt.target).next().next().slideUp('500');
	}
});

Template.dashOrganizations.events({
	'click #uploadCourses': function () {
		let names = $('#courseNames').val();
		let codes = $('#courseCodes').val();
		Meteor.call('courses.addSeveral',names,codes,function (err) {
			if(err){
				alertError("Failed", err.message);
			}else{
				alertSuccess('yeah','it didn\'t fail.');
			}
		});
	},
	'click #coursesLoadMore': function () {
		courseSub.loadNextPage();
	},
	'click #clubsLoadMore': function () {
		clubSub.loadNextPage();
	},
	'click #createNewClub': function () {
		Modal.show('dashClubEditor');
	},
	'click .btn-delete': function (evt) {
		let obj = $(evt.target).closest($('.editor-options'));
		let type = obj.attr('data-category');
		let id = obj.attr('id');
		if(type === 'club'){
			Meteor.call('clubs.remove', id, function (err) {
				if(err){
					alertError('Something Terrible Happened...', err.message);
				}
			});
		}else{
			Meteor.call('course.remove', id, function (err) {
				if(err){
					alertError('Something Terrible Happened...', err.message);
				}
			});
		}
	}
});

Template.dashRoleEditor.onRendered(function () {
	let data = Session.get('editingUser');
	console.log(data);
	$(document).ready(function () {
		$('#newUserRoles').select2({
			placeholder: "Click to select...",
			allowClear: false,
		});
		$("#newUserRoles").val(data.roles).trigger("change");
	});
});

Template.dashRoleEditor.helpers({
	'name': function () {
		return Session.get('editingUser').services.google.name;
	}
});

Template.dashRoleEditor.events({
	'submit .dash-role-edit': function (evt) {
		let data = Session.get('editingUser');
		evt.preventDefault();
		Meteor.call('addUserToRole', data._id, $('#newUserRoles').val(), function (err) {
			if(err){
				alertError("Role Modification Failed!", err.message);
			}else{
				Modal.hide('dashRoleEditor');
				alertSuccess("Success!", "User Role has been successfully modified!");
			}
		});
	}
});

Template.dashClubEditor.onRendered(function () {
	initDropZone('newClubImage',{
		number: 1,
		size: 10,
		message: "Drop your image here or click to use the file browser"
	});
});

Template.dashCategoryEditor.onRendered(function () {
	initDropZone('newCategoryImage',{
		number: 1,
		size: 10,
		message: "Drop your image here or click to use the file browser"
	});
});

Template.dashPostEditor.onRendered(function () {
	let data = Session.get('dashEditorData');
	if(data.subType === 'imageOnly'){
		$('#newPostBody').hide();
	}else{
		$('#newPostBody').val(data.content);
	}
	$('#newPostHeadline').val(data.headline);
	$("#newPostTags").tagsinput('items');
	_.forEach(data.tags,function (item) {
		$('#newPostTags').tagsinput('add', item);
	});

	Tracker.autorun(function () {
		let categorySub = Meteor.subscribe('categories');
		if(categorySub.ready()){
			let categories = Categories.find({});
			categories.observeChanges({
				added: function(id, fields) {
					let newCat = new Option(fields.name, fields.name);
					$('#newPostCategories').append(newCat);
				}
			});
			$("#newPostCategories").val(data.categories).trigger("change");
		}
	});
	$(document).ready(function () {
		$('#newPostCategories').select2({
			placeholder: "Click to select matching categories",
			allowClear: true,
		});
	});
});

Template.dashCategoryEditor.events({
	'submit .dash-category-edit': function (evt) {
		evt.preventDefault();
		let json = {
			name: $('#newCategoryName').val(),
			description: $('#newCategoryDescription').val(),
			imgId: Session.get('categoryImageId'),
			featured: $('#newCategoryFeatured').is(':checked')
		};
		if(!Session.get('editingBlogCategory')){
			Meteor.call('category.addNew',json,function (err) {
				Modal.hide('dashCategoryEditor');
				if(err){
					alertError('Something Wrong Happened...', err.message);
				}
			});
		}else{
			Meteor.call('blogCategory.addNew',json,function (err) {
				Modal.hide('dashCategoryEditor');
				if(err){
					alertError('Something Wrong Happened...', err.message);
				}
			});
		}

	}
});

Template.dashClubEditor.events({
	'submit .dash-club-edit': function (evt) {
		evt.preventDefault();
		let json = {
			name: $('#newClubName').val(),
			description: $('#newClubDescription').val(),
			room: $('#newClubRoom').val(),
			schedule: $('#newClubSchedule').val(),
			imgId: Session.get('categoryImageId'),
		};
		Clubs.insert(json, function (err) {
			if (err) {
				alertError("Error Creating Club", err.message);
			} else {
				Modal.hide('dashClubEditor');
				alertSuccess("Yah!", "Club successfully created!");
			}
		});
	}
});

Template.dashPostEditor.events({
	'submit .dash-announcement-edit': function (evt) {
		evt.preventDefault();
		let separators = [' , ', ', ', ',', ' ,'];
		let tags = $('#newPostTags').val().split(new RegExp(separators.join('|'), 'g'));
		let json = {
			headline: $('#newPostHeadline').val(),
			content: $('#newPostBody').val(),
			tags: tags
		};
		Posts.update({_id: Session.get('editingId')},{$set: json});
		Modal.hide();
	}
});


function initDropZone(id, info) {
	return new Dropzone("form#" + id, {
		maxFiles: info.number || 1,
		maxFilesize: info.size || 8,
		thumbnailWidth: 400,
		addRemoveLinks: true,
		dictDefaultMessage: info.message || "Drop your image here, or click to select an image using the browser.",
		accept: function (file, done) {
			const uploader = Images.insert({
				file: file,
				streams: 'dynamic',
				chunkSize: 'dynamic'
			}, false);

			uploader.on('end', function (error, fileObj) {
				if (error) {
					alert('Error during upload: ' + error);
				} else {
					Session.set('newImageId', fileObj._id); //update the image id to current image
					done();
				}
			});
			uploader.on('error', function (error) {
				alert('Error during upload: ' + error);
			});
			uploader.start();
		}
	});
}
