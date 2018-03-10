import m from 'mithril'
import "./index.css"
import Card from './views/Card'

import * as app from './app'

class Body {
    header(vnode) {
        return m('div#header', {
            style: {height: '200px', width: '100%', background: app.colGray}
        })
    }

    view(vnode) {
        return m('div#home', {
                style: {
                    height: '100vh',
                    width: '100%',
                    overflow: 'auto',
                    background: app.colBackground
                }
            },
            this.header(vnode.attrs),
            app.projects.map((project) => m(Card, project))
        )
    }
}

m.mount(document.body, Body);
