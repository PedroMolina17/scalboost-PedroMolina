"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameImage = void 0;
const renameImage = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const ext = file.originalname.split('.').pop();
    const randomString = Math.random().toString(36).substring(2, 10);
    const newFileName = `${name}-${randomString}.${ext}`;
    callback(null, newFileName);
};
exports.renameImage = renameImage;
//# sourceMappingURL=image-description.helper.js.map