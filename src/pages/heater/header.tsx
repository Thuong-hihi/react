import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { useAuth } from '../client/AuthContext';
export const Header: React.FC = () => {
  // const { user } = useAuth();
  // // console.log('User:', user);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
    setSearchTerm(''); // Reset search term when showing the search input
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);
    setSearchVisible(false); // Hide search input after submitting
  };

  const usernameLocal = localStorage.getItem('username')
  const logOut = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
      <div className="w-[100%]">
        {/* Phần 1 */}
        <div className="flex bg-[#2e2f31] h-[50px] px-[80px] py-[10px]">
          {/* Vị trí */}
          <div className="flex text-[white] cursor-pointer " title="fpt polytechnich">
            <i className="fa-solid fa-location-dot text-xl"></i>
            <p className="text-[18px] font-normal ml-[8px]">Location</p>
          </div>

          {/* Email */}
          <div className="flex text-[white] text-xl mx-[30px] cursor-pointer" title="thuong@gamil.com">
            <i className="fa-solid fa-envelope"></i>
            <p className="text-[18px] font-normal ml-[8px]" >Email</p>
          </div>

          {/* Điện thoại */}
          <div className="flex text-[white] text-xl cursor-pointer" title="012345678">
            <i className="fa-solid fa-phone"></i>
            <p className="text-[18px] font-normal ml-[8px]">0123456789</p>
          </div>

          {/* Giới thiệu */}
          <div className="ml-[50px] mt-[2px]">
            <Marquee direction="left" className="w-[800px]  text-[white]">
              <Marquee>
                Tận hưởng giao hàng toàn quốc cho những đơn hàng từ 99.000vnd +
              </Marquee>

            </Marquee>
          </div>
          {/* search */}
          <div>
            <div className="ml-[40px]">
              {!searchVisible ? (
                <button
                  className="flex text-[white] text-xl bg-[#FED100] w-[38px] h-[35px] rounded-[5px] px-[8px] py-[8px]"
                  onClick={handleSearchClick}
                >
                  <i className="fa-solid fa-magnifying-glass text-[#000]"></i>
                </button>
              ) : (
                <div>
                  <input
                    type="text"
                    placeholder="Nhập thông tin..."
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                  <button
                    className="absolute top-0 right-0 pt-[10px] pr-[30px] cursor-pointer"
                    onClick={handleSearchSubmit}
                  >
                    <i className="fa-solid fa-magnifying-glass text-[#000]"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* cart */}
          <div className="ml-[30px]">
            <a href="">
              <button className="flex text-[white] text-xl bg-[#FED100] w-[38px] h-[35px] rounded-[5px] px-[8px] py-[8px]">
                <i className="fa-solid fa-cart-shopping text-[#000]"></i>
              </button>
            </a>
          </div>
        </div>
        {/* end 1 */}
      </div>

      <div className='flex h-[100px]'>
        <div className='flex ml-[200px] my-auto'>
          <img src="../../../public/images/oto.webp" alt="" className='w-[60px] h-[80px] pt-[10px]' />
          <div className='block text-[#5b6f4a] pl-[30px]'>
            <p className='text-[20px]'>Phí ship </p>
            <p>Đồng giá 25k</p>
          </div>


        </div>

        <div className='flex ml-[200px] mt-[10px]'>
          <img src="../../../public/images/hotro.webp" alt="" className='w-[50px] h-[60px] pt-[10px]' />
          <div className='block text-[#5b6f4a] pl-[30px]'>
            <p className='text-[20px]'> Hỗ trợ 24/7 </p>
            <p>+ 84 0915711821</p>
          </div>


        </div>

        <div className='flex ml-[200px] mt-[10px]'>
          <img src="../../../public/images/lịch.webp" alt="" className='w-[50px] h-[60px] pt-[10px]' />
          <div className='block text-[#5b6f4a] pl-[30px]'>
            <p className='text-[20px]'> Giờ làm việc </p>
            <p>8h30 - 17h30 từ T2-T7</p>
          </div>

          {/* <div className='flex ml-[140px] mt-[10px]'>
            <div>
              {user ? (
                <div>
                  <p>Xin chào, {user.username}!</p>
                  <button onClick={logout}>Đăng xuất</button>
                </div>
              ) : (
                <p>Vui lòng đăng nhập để xem thông tin người dùng.</p>
              )}
            </div>
          </div> */}
          {/* thong tin user */}
        </div>
      </div>

      {/* Phần 2 */}
      <div className="ml-[] h-[100px]  py-[20px] flex bg-[#5b6f4a] text-white">

        {/* logo */}
        <nav>
          <ul className="flex ml-[200px] pt-[10px]">
            <li className="">
              <Link to="/" className="text-[18px] font-bold  text-white hover:text-[#FED100]">
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-[18px]  font-bold  text-white mx-[20px] hover:text-[#FED100]">
                SẢN PHẨM
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[18px]  font-bold  text-white hover:text-[#FED100]">
                GIỚI THIỆU
              </Link>
            </li>
            <Link to="/">
              <div className="w-[200px] h-[140px] mt-[-25px] ml-[70px]">
                <img src="../../../public/images/logo.webp" alt="" />
              </div>
            </Link>
            <li>
              <Link to="/menu" className="text-[18px] ml-[50px]  font-bold  text-white mx-[20px] hover:text-[#FED100]">
                MENU
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-[18px]  font-bold  text-white hover:text-[#FED100]">
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-[18px]  font-bold  text-white ml-[20px] hover:text-[#FED100]">
                LIÊN HỆ
              </Link>
            </li>
          </ul>
        </nav>
        {
          usernameLocal ? (<>
            <div className='mt-3 ml-[150px]'>Xin chào: {usernameLocal}</div>
            <span onClick={logOut} className='cursor-pointer mt-3 ml-4'>Đăng xuất</span>
            
          </>
          ) : (
            <div className="flex  w-[200px]  h-[50px] ml-[100px] mt-[5px] ">
              <a href="/signin">
                <button className="w-[90px] h-[50px] border hover:bg-[#FED100] text-[18px] rounded-[5px] shadow-lg">Signin</button>
              </a>
              <a href="/signup">
                <button className="w-[90px] h-[50px] border ml-[10px] hover:bg-[#FED100] text-[18px] rounded-[5px] shadow-lg">Signup</button>
              </a>
            </div>
          )
        }
        {/* signin signup */}
      </div>
      {/* nav */}


      {/* Nội dung phần 2 */}
    </div>
  );
};
