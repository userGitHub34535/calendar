import {format} from 'date-fns';

export default function Hour({hour}) {
    console.log(hour);
    return(
            <p className="hour"> {format(hour, 'H:mm')}</p>
    )
}