var imageStore = new FS.Store.GridFS("images");

export const Images = new FS.Collection("images", {
  stores: [imageStore]
});

//Set the permissions for Images collection
Images.allow({
    insert: function(){
       return true;
    },
    update: function(){
       return true;
    },
    remove: function(){
       return true;
    },
    download: function(){
       return true;
    }
});
