import { Card, CardBody } from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { CreateProfile } from './createProfile';
import { getProfile } from '../actions'
import { EditProfile } from "./editProfile";

export async function ProfileView() {

  const userProfile = await getProfile()

  if(userProfile == undefined || userProfile.data.birthday == undefined) {
    return (
      <CreateProfile />
    )
  }

  return (
    <EditProfile userProfile={userProfile} />
  )
}


