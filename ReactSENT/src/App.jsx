import { useState } from 'react';
import { Layout } from 'antd';
import logo from './assets/react.svg';
import './App.css'
import SideBar from './components/SideBar';
import Kontak from './components/Kontak';
import Chat from './components/Chat'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';

const { Header, Sider } = Layout;
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className='main'>
        <SideBar/>
        <Kontak/>
        <Chat/>
    </div>
  )
}

export default App
