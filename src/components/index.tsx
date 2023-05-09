import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact, AgGridReactProps } from '@ag-grid-community/react';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const AgGrid: React.FC<AgGridReactProps> = props => (
  <div
    className="ag-theme-balham"
    style={{ height: 400 }}
  >
    <AgGridReact {...props}/>
  </div>
);
