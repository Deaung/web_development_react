import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Item } from "../App2";

type AddItemProps = {
  addItem: (item: Item) => void
}

function AddItem(props: AddItemProps){

  const [open, setOpen] = useState(false);
  // item관련된 상태 정의
  const [item,setItem] = useState<Item>({
    product: '',
    amount: '',
  })


  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  const addItem = () =>{
    props.addItem(item); // 추가하고나서 TextField 내에 있는 값들 지울 예정
    //JS에서 수업,텍스트 필드 지우고 모달대화상자 닫기
    setItem({
      product:'',
      amount:'',
    });
    handleClose();
  }
 
  return(
    <>
      <br />
      <Button variant="outlined" onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>new Item</DialogTitle>
        <DialogContent>
          
          <TextField value={item.product} margin="dense"
            onChange={e=>setItem({...item,product: e.target.value})}
            label="Product" fullWidth />  

          <TextField value={item.amount} margin="dense"
            onChange= { e => setItem({...item,amount: e.target.value})}
            label="Amount" fullWidth />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default AddItem