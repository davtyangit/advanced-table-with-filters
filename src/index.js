import React from 'react';
import ReactDOM from 'react-dom/client';
import { MedTable } from './MedTable';
import '../src/i18/i18';
import 'antd/dist/reset.css';
import '../src/styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MedTable />);
