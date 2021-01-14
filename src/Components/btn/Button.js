import {Button } from 'react-bootstrap';
const importedButton =(anything) =>{
    const handleClick = () => anything.onClick(anything.increment)
    return (
        <Button onClick={handleClick}>
            {anything.increment}
        </Button>
    )
}
export default importedButton;