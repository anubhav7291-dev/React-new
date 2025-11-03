function customRender(element,container){
    /*
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href',element.props.href)
    domElement.setAttribute('targer',element.props.target)

    container.appendChild(domElement)
    */
    
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    for (const prop in element.props) {
        if(prop === 'children') continue
        domElement.setAttribute(prop,element.props[prop])
    }
    container.appenChild(domElement)
}





const reactelement={
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactelement,mainContainer)