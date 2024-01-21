import { Button, Card, CardBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { createProfile } from "../actions";

export function CreateProfile() {

  return (
    <div>
      <Card>
        <CardBody>
          <p>Create Profile</p>
        </CardBody>
      </Card>
      <form action={createProfile}>
        <Input
          type="text"
          label="birthday"
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          type="number"
          label="height"
          variant="bordered"
          className="max-w-xs"
        />
        <Input
          type="number"
          label="weight"
          variant="bordered"
          className="max-w-xs"
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  )
}


