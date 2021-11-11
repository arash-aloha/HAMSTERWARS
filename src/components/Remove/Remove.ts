import { HamsterObject } from "../../TS-models/models";

    const handleDelete = (id:any, clickedHamster: HamsterObject, newHamsterArray: HamsterObject[], setNewHamsterArray:(hamster:HamsterObject[])=>void) => {
        
        if ( clickedHamster ) {
            const newArray = newHamsterArray?.filter(hamster => hamster.id !== clickedHamster.id)
            setNewHamsterArray(newArray!)
        }
        async function updateDatabase(id:any) {
            await fetch(`/hamsters/${id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });
        }
    updateDatabase(id)
    }

export { handleDelete }
