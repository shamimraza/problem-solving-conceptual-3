/*
Problem 1:
আপনার কাছে একটি জাভাস্ক্রিপ্ট ফাংশন রয়েছে যার নাম হলো isValidPhotoName(photoName, imageExtensions)। এই ফাংশনটি দুটি প্যারামিটার গ্রহণ করে: photoName, যা একটি ছবির নাম প্রদর্শন করে, এবং imageExtensions Array, যা .jpg, .png, ইত্যাদি ছবির এক্সটেনশন গুলি ধারণ করে।
আপনার কাজ হলো isValidPhotoName ফাংশনটি সম্পূর্ণ করা যাতে এই ফাংশনের মাধ্যমে পরীক্ষা করা যায় আপনি দেওয়া প্যারামিটার photoName সঠিক ছবির নাম কিনা তা। এই ফাংশনের কাজ হলো true রিটার্ন করা যদি photoName একটি বৈধ ছবির নামের শেষে বিদ্যমান ছবির এক্সটেনশন গুলির মধ্যে যেকোনটি শেষ হয়; অন্যথায়, ফাংশনটি false রিটার্ন করবে।

*/


function isValidPhotoName(photoName, imageExtensions) {
    // Check if photoName is a string and not empty
    if (typeof photoName !== 'string' || photoName.trim() === '') {
        return false;
    }

    // Check if imageExtensions is an array and not empty
    if (!Array.isArray(imageExtensions) || imageExtensions.length === 0) {
        return false;
    }

    // Convert photoName to lowercase for case-insensitive comparison
    const lowerCasePhotoName = photoName.toLowerCase();

    // Loop through each image extension and check if photoName ends with any of them
    for (const extension of imageExtensions) {
        const lowerCaseExtension = extension.toLowerCase();
        if (lowerCasePhotoName.endsWith(lowerCaseExtension)) {
            return true;
        }
    }

    // If none of the image extensions match, return false
    return false;
}
const imageExtensions = ['.jpg', '.png', '.jpeg', '.gif'];
console.log(isValidPhotoName(imageExtensions));