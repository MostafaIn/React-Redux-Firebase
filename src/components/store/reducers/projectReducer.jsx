
const initState={
    projects:[
        {id:'1',title:'my portfolio',content:'this can reveal my knowledge and skills in web developing.'},
        { id: '2', title: 'learning material UI', content: 'I would like to do the design with this tool.' },
        { id: '3', title: 'Student assessment system', content: 'this is a testing and exam system for the students and teachers.' },
    ]
}

const projectReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log('created project :)', action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.err)
        return state;
        default:
        return state;
    }
}

export default projectReducer