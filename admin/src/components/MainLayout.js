import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  
    
} from '@ant-design/icons';
import { IoNotifications } from "react-icons/io5";
import { Layout, Menu, Button, theme } from 'antd';
import { MdSpaceDashboard} from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { HiMiniUserCircle } from "react-icons/hi2";
import { SiBrandfolder } from "react-icons/si";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosColorFill, IoIosNotifications } from "react-icons/io";
import { FaClipboardList,FaBlogger } from "react-icons/fa";
import { LiaBlogSolid } from "react-icons/lia";








const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
        <h2 className='text-white fs-5 text-center py-3 mb-0'>
          <span className='sm-logo'>DC</span>
           <span className='lg-logo'>Dev Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
      onClick={( { key })=>{
        if (key === "signout") {
          // Handle signout action
        } else {
          // Handle navigation
          navigate(key);
        }
      }}
          items={[
            {
              key: 'dashboard',
              icon: < MdSpaceDashboard size={19}/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <HiMiniUserCircle size={19}/>,
              label: 'Customers',
            },
            {
              key: 'product',
              icon: <FaCartShopping size={19}/>,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <FaCartShopping size={19}/>,
                  label: 'Add product',
                },
                {
                  key: 'product-list',
                  icon: <FaCartShopping size={19}/>,
                  label: ' Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder size={19}/>,
                  label: ' Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder size={19}/>,
                  label: ' Brand List',
                },
                {
                  key: 'category',
                  icon: <BiSolidCategory size={19}/>,
                  label: ' Category',
                },
                {
                  key: 'list-category',
                  icon: <BiSolidCategory size={19}/>,
                  label: ' Category List',
                },
                {
                  key: 'color',
                  icon: <IoIosColorFill size={19}/>,
                  label: ' Color',
                },
                {
                  key: 'list-color',
                  icon: <IoIosColorFill size={19}/>,
                  label: ' Color List',
                }


              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList size={19}/>,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <FaBlogger size={19}/>,
              label: 'Blogs',
              children :[
                {
                  key: 'blog',
                  icon: <LiaBlogSolid size={19}/>,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaBlogger size={19}/>,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <LiaBlogSolid size={19}/>,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaBlogger size={19}/>,
                  label: 'Blog Category List',
                },
                
              ]
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList size={19}/>,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className='d-flex justify-content-between ps-1 ps-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://gilbertresume.netlify.app/static/media/profile.bc4e39b2.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Gilbert</h5>
                <p className="mb-0">bagenigilbert@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;