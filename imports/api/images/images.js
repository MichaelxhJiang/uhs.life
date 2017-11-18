import { Meteor }          from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

const Images = new FilesCollection({
    collectionName: 'Images',
    allowClientCode: true,
    storagePath: '/data',
    onbeforeunloadMessage() {
        return 'Upload is still in progress! Upload will be aborted if you leave this page!';
    },
    onBeforeUpload(file){
        if(file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)){
            return true;
        }else{
            return 'Please upload an image, with size equal or less than 10MB';
        }
    },
    downloadCallback(fileObj) {
        if (this.params.query.download === 'true') {
            // Increment downloads counter
            Images.update(fileObj._id, {$inc: {'meta.downloads': 1}});
        }
        // Must return true to continue download
        return true;
    },
});

if (Meteor.isServer) {
    Images.allowClient();
    Meteor.publish('files.images.all', function () {
        return Images.find().cursor;
    });
} else {
    Meteor.subscribe('files.images.all');
}

export { Images };
