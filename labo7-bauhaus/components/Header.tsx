export default function Header(props : any) {
    return(
        <header className="c-header">
            <p className="c-header__pagename">Home | </p><p>{props.pagename}</p> 
        </header>
    )
}