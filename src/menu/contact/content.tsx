import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../common";
import CommonPadding from "../../components/CommonPadding";
import FlexAbout from "../../components/FlexAbout";
import { createFormItem } from "../../components/FormItem";
import Heading1 from "../../components/Heading1";
import TextInput from "../../components/Input";
import Para from "../../components/Para";
import AboutImage from "../../components/AboutImage";

export default function Content() {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const FormInput = React.useMemo(
    () => createFormItem(control, errors, TextInput),
    [control, errors]
  );

  return (
    <CommonPadding>
      <Heading1>
        From Concept to Creation – Let's Bring Ideas to Life Together!
      </Heading1>

      <Para>
        Please let us know what service you are interested in by completing the
        form below. We will get in touch with you shortly.
      </Para>

      <FlexAbout>
        <AboutImage source={"./images/contact.svg"} />
        <div className="my-auto xl:max-w-md">
          <FormInput label={"Name"} name={"name"} maxLength={50} />
          <FormInput label={"Email"} name={"email"} maxLength={50} />
          <FormInput label={"Mobile Number"} name={"phone"} maxLength={20} />
          <FormInput label={"Service Required"} name={"service"} maxLength={50} />
          <FormInput label={"Comments"} name={"comment"} maxLength={150} type="textarea" />
          <div className="flex my-8 xl:pt-0">
            <Button text={"Submit"}></Button>
          </div>
        </div>
      </FlexAbout>
    </CommonPadding>
  );
}
