import Button from './Button';

const Article = (props:any) => {
    return(
        <div>
            <div className="c-article">
                <p className="c-article__type">{props.type}</p><p>&nbsp; | {props.words} | {props.date}</p>
            </div>
                <p>{props.description}</p>
                <Button link={props.link} action={props.action} />

        </div>
    )
}

export default Article;