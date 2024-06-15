import React, { useState } from 'react'
import styles from "./listContainer.module.css"
import Image from 'next/image'
import { FaUser } from "react-icons/fa";
import profile from "../../../../public/media/img/profile.jpg"
import LoadingUi from '../isLoading/LoadingUi';
import Msg from '../Msg/Msg';

const ListContainer = ({isLoading, err, data}) => {
    const [userDetails, setuserDetails] = useState(null)
  return (
    <div className={styles.container}>
        {err && <Msg message={err} color={"#f10b0be7"} />}
        {isLoading && <LoadingUi />}
    {data &&<>
      <div className={styles.users}>
        <h3 className={styles.title}><FaUser /> Users</h3>
        <div className={styles.profile}>
        {data?.map(user=>(
            <div className={styles.user} 
                onClick={()=>setuserDetails(user)}
                key={user.id}    
            >
                <div className={styles.imgContainer}>
                    <Image
                        src={user.avatar}
                        width={500}
                        height={300}
                        alt='profile-pic'
                    />
                </div>
                <h4 className={styles.userName}>{user.profile?.username}</h4>
        </div>
        ))}
        </div>
      </div>
      {!userDetails && <Msg message={"Click on any user to view details!"} color={"#383838"}/>}
      {userDetails && <div className={styles.detailsContainer}>
      <div className={styles.detailsHeader}>
        <div className={styles.detailsImgContainer}>
                    <Image
                        src={userDetails?.avatar}
                        width={500}
                        height={300}
                        alt='profile-pic'
                    />
                </div>
                <h2>{`${userDetails?.profile.username}`}</h2>
      </div>
        <div className={styles.details}>
            <p><b>Username: </b>{userDetails?.profile.username}</p>
            <p><b>FirstName: </b>{userDetails?.profile.firstName}</p>
            <p><b>LastName: </b>{userDetails?.profile.lastName}</p>
            <p><b>Email: </b>{userDetails?.profile.email}</p>
            <p><b>JobTitle: </b>{userDetails?.jobTitle}</p>
            <p className={styles.bio}><b>Bio: </b>{userDetails?.Bio} <br /><small>Created at</small></p>
        </div>
      </div>}
      </>}
    </div>
  )
}

export default ListContainer
