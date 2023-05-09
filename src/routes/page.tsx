import { AgGrid } from '@/components';

export default function Index() {
  return (
    <AgGrid
      columnDefs={[
        {
          field: 'id',
          headerName: '',
          checkboxSelection: true,
          width: 36,
          suppressMenu: true,
          suppressSizeToFit: true,
          resizable: false,
          valueGetter: () => '',
        },
        { headerName: 'col1', field: 'foo' },
        { headerName: 'col2', field: 'bar' },
      ]}
      getRowId={params => params.data.id}
      rowData={[
        { id: '1', foo: 'foo1', bar: 'bar1' },
        { id: '2', foo: 'foo2', bar: 'bar2' },
        { id: '3', foo: 'foo3', bar: 'bar3' },
      ]}
    />
  );
}
