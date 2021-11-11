import { useRecoilState } from "recoil"
import { addBtnAtom } from "../../State/atoms"

import Addform from "./Addform"

import './AddPage.css'

const AddPage = ( ) => {

    const [toggle,setToggle] = useRecoilState<boolean>(addBtnAtom);

    return (
        <section className="addpage-overlay">
            addpage-overlay
            <Addform />
            <button onClick={()=>setToggle(!toggle)}> regret </button>
        </section>
    )
}

export default AddPage