import m from 'mithril'

export default class Card {
    view(vnode) {
        let {id, title, description} = vnode.attrs;
        return m(`div#card${id}`, {
            class: ['card'],
            style: {margin: '10px auto', width: '90%'},
        }, [
            m(`h3#cardTitle${id}`, {style: {
                margin: '20px',
                width: '100%'
            }}, title),
            m(`div#cardDesc${id}`, {style: {
                width: '100%',
                    margin: '20px'
            }}, description)
        ])
    }
}
