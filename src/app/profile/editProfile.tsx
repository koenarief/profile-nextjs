import { Button, Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { updateProfile } from "../actions";

export function EditProfile({ userProfile }) {

  return (
    <div>
      <Card>
        <CardBody>
          <p>Edit Profile</p>
        </CardBody>
      </Card>
      <form action={updateProfile}>
        <Input
          type="text"
          name="name"
          label="name"
          variant="bordered"
          defaultValue={userProfile.data.name}
          className="max-w-xs"
        />

        <Input
          type="text"
          name="birthday"
          label="birthday"
          variant="bordered"
          defaultValue={userProfile.data.birthday}
          className="max-w-xs"
        />
        <Input
          isReadOnly
          type="text"
          label="horoscope"
          variant="bordered"
          value={userProfile.data.horoscope}
          className="max-w-xs"
        />
        <Input
          isReadOnly
          type="text"
          label="zodiac"
          variant="bordered"
          value={userProfile.data.zodiac}
          className="max-w-xs"
        />
        <Input
          type="number"
          name="height"
          label="height"
          variant="bordered"
          defaultValue={userProfile.data.height?.toString()}
          className="max-w-xs"
        />
        <Input
          type="number"
          name="weight"
          label="weight"
          variant="bordered"
          defaultValue={userProfile.data.weight?.toString()}
          className="max-w-xs"
        />
        <Button type="submit">Update</Button>
      </form>
    </div>
  )
}


