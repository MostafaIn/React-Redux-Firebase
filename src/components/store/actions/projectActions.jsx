export const createProject = project =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        // make async call to database
        const firestore= getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Rohy',
            authorLastName:'Dehqanzada',
            authorId: 12345,
            createAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT_SUCCESS', project})
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })
        
    }
}