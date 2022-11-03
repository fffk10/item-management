import React from 'react'
import Paper from '@mui/material/Paper';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import '../../App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
  },
})

const rows: GridRowsProp = [
  { id: 1, name: 'ドラム式洗濯機', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 2, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16', comment: 'ここに商品に対する備考を入力します' },
  { id: 3, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 4, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 5, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 6, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 7, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 8, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 9, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 10, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 11, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 1, name: 'ドラム式洗濯機', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 2, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16', comment: 'ここに商品に対する備考を入力します' },
  { id: 3, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 4, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 5, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 6, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 7, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 8, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 9, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 10, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 11, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 1, name: 'ドラム式洗濯機', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 2, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16', comment: 'ここに商品に対する備考を入力します' },
  { id: 3, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 4, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 5, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 6, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 7, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 8, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 9, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 10, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
  { id: 11, name: 'item', quantity: '1', price: '200000', purchaseDate: '2022/10/16' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: '物品名', width: 150 },
  { field: 'quantity', headerName: '個数', width: 150 },
  { field: 'price', headerName: '価格', width: 150 },
  { field: 'purchaseDate', headerName: '購入日', width: 150 },
  { field: 'comment', headerName: '備考', width: 400 },
];

function ItemsPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color='primary' sx={{ m: '1rem' }}>物品登録</Button>
      </ThemeProvider>
      <TextField id="standard-basic" label="検索" variant="standard" fullWidth />
      <Paper elevation={3} sx={{ p: '0.5rem', m: '0.5rem', height: '45rem' }}>
        <div style={{ height: 'inherit' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </Paper>
    </div >
  )
}

export default ItemsPage