import React, {Component} from 'react';
import config from 'src/utils/Hoc/configHoc';
import CDocBase from "src/views/base/c_docs"



@config({
    path: '/admin/c_docs',
    title: {text: '文集管理', icon: 'folder'},
    breadcrumbs: [{key: 'c_doc', text: '文集管理', icon: 'folder'}],
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
            <CDocBase personal={personal} />
        );
    }
}

export default CDoc;