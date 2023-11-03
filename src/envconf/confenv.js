const confenv = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECTID,
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASEID,
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTIONID,
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKETID,
};

export default confenv;
