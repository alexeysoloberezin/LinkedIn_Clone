import React from 'react';
import Avatar from "@/shared/ui/avatar/avatar";
import Dropdown from "@/shared/ui/dropdown/dropdown";
import Button from "@/shared/ui/buttons/button";
import {Link} from "react-router-dom";

function NavProfile({width}) {
  const styles = {
    width: width || 'fit-content'
  }


  return (
    <div>
      <Dropdown
        width={'248px'}
        toggle={
          <div className={'cursor-pointer hover:bg-gray-100 px-3 py-2'}>
            <Avatar
              src={'https://images.media.io/images2023/photo-enhance/banner-after.png'}
              size={'24'}
            />
            <div className={'text-xs text-gray-600 text-center'} style={{margin: '-5px 0 0 0'}}>Me</div>
          </div>
        }>
        <div style={styles}>
          <div className={'p-2'}>
            <div className={'flex gap-2'}>
              <Avatar classes={'shrink-0 mt-1'} src={'https://images.media.io/images2023/photo-enhance/banner-after.png'}/>
              <div>
                <div className={'font-semibold'}>Leonid Ivanov</div>
                <div className={'text-gray-600 text-sm'}>
                  Senior Frontend | Vue, React developer | Fintech | Insurance | AL/ML | CRM | Telecom and Telemarketing
                </div>
              </div>
            </div>
            <Button text={'View Profile'} outlined={true} classes={'text-sm w-full mt-2'}/>

            <div>
              <div className={'mt-4 '}>
                <div className={'font-semibold p-1'}>Account</div>
                <Link to={'/'} className={'linkItem'}>Settings & Privacy</Link>
                <Link to={'/'} className={'linkItem'}>Help</Link>
                <Link to={'/'} className={'linkItem'}>Language</Link>
              </div>
              <div className={' mt-2 grid'}>
                <div className={'font-semibold p-1'}>Manage</div>
                <Link to={'/'} className={'linkItem'}>Posts & Activity</Link>
                <Link to={'/'} className={'linkItem'}>Job posting account</Link>
                <hr className={'my-2'}/>
                <Link to={'/'} className={'linkItem'}>Sign out</Link>
              </div>
            </div>
          </div>
        </div>
      </Dropdown>

    </div>
  );
}

export default NavProfile;