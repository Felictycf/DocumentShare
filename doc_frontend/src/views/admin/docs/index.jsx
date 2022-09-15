import React, {Component} from 'react';
import config from 'src/utils/Hoc/configHoc';
import DocBase from "src/views/base/docs"



@config({
    path: '/admin/docs/docs',
    title: {text: '文档管理', icon: 'file'},
    breadcrumbs: [{key: 'doc', text: '文档管理', icon: 'file'}],
})
class CDoc extends Component {
    state = {
        personal: false,  // 是否个人中心
    };
    render() {
        const {
            personal,
        } = this.state;

        return (
            <DocBase personal={personal} />
        );
    }
}

export default CDoc;