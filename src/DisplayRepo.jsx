
export default function DisplayRepos(props) {

    return (
        <div>
                <h1>Welcome to my Github repository page</h1>
                <h2>Ojo Oladayo has {props.length} repositories.</h2>
                <p>All of which you will see as you navigate with the prev and next button</p>
            <div className="repos">
               
                <h3>{props.name}</h3>
                <p>The link to this repository is: <a href={props.link}>here</a> </p>
                <h4 className="details">Click the About link at the top for more details</h4>

                <div className="paginate">
                    <button className="prev" onClick={props.handlePrev}>- Prev</button>
                    <button className="next" onClick={props.handleNext}>Next +</button>
                </div>

            </div>
        </div>
    )
}