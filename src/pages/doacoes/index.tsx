import Donate from "./donate"
import Checkout from "./checkout"
import { useState } from "react"

export default function Doacoes() {
    const [showCheckout, setShowCheckout] = useState(false);
    const [value, setValue] = useState(20);
    const toggleShowCheckout = () => {
        setShowCheckout(!showCheckout);
        console.log(showCheckout);
    }
    const valueSetter = (value: number) => {
        setValue(value);
    }
    return (
        <>
            {(showCheckout ? <Checkout value={value} /> : <Donate setValue={valueSetter} toggleShowCheckout={toggleShowCheckout} />)}
        </>
    )
}