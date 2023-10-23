export default interface Props {
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>
}