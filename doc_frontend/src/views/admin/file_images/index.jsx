import React, {Component} from 'react';
import config from 'src/utils/Hoc/configHoc';
import FileImagesBase from "src/views/base/file_images"


@config({
    path: '/admin/attachments/images',
    title: {text: '图片管理', icon: 'picture'},
    breadcrumbs: [{key: 'image', text: '图片管理', icon: 'picture'}],
})
class FileImages extends Component {
    state = {
        personal: false,  // 是否个人中心
    };
    render() {
        const {
            personal,
        } = this.state;

        return (
            <FileImagesBase personal={personal} />
        );
    }
}

export default FileImages;