import m from 'mithril'
import * as app from "../app";


export default class Sidebar {
    view(vnode) {
        let {width, contents} = vnode.attrs;
        return m('div#sidebar', {
            style: {
                height: '100%',
                width: width,
                background: app.colDark,
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'inline-block',
            }
        }, contents)
    }
}
