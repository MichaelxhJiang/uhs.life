var imageStore = new FS.Store.GridFS("images");

export const Images = new FS.Collection("images", {
  stores: [imageStore]
});

//Set the permissions for Images collection
Images.allow({
    insert: function(){
       return Roles.userIsInRole(this.userId, ['teacher', 'admin']);
    },
    update: function(){
       return Roles.userIsInRole(this.userId, ['teacher', 'admin']);
    },
    remove: function(){
       return Roles.userIsInRole(this.userId, ['teacher', 'admin']);
    },
    download: function(){
       return Roles.userIsInRole(this.userId, ['teacher', 'admin']);
    }
});
