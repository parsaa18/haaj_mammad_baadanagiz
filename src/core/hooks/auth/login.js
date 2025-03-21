import loginUserAPI from "../../../core/services/api/auth/login.service";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { setItem } from "../../services/storage/index.storage";

const useLogin = () => {
  const { mutate: loginMutation, isPending: pending } = useMutation({
    mutationFn: loginUserAPI,
    onSuccess: (input) => {
      console.log(input);
      setItem("token", input.token);
      toast(input.message);
      // navigate("...");
    },
    onError: () => {
      toast("Error");
    },
  });
  return { loginMutation, pending };
};

export default useLogin;
