

export default function EachRepoPage(props){

    return(
        <div>            
            <h1>Welcome to {props.name} repository</h1>
            <p>The link to repository <a href={props.link}>{props.link}.</a> Hopefully you will find things useful to you  </p>
            <p>This repository has being forked {props.fork} times</p>
            <p>It was pushed on {props.pushed}</p>
            <p>The size of this repo is {props.size}</p>
            <p>The owner is Ojo Oladayo with the username {props.owner}. </p>
            <h4>To be able to view details for other repos, go to the home page, 
                navigate between the prev and next, then come back to the about page.
            </h4>
        </div>
    )
}