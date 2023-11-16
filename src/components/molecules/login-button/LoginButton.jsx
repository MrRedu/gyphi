import { LogIn } from 'lucide-react'

// Probably shouldn't be here
export const LoginButton = () => {
  const handleClick = () => {
    console.log('clicked')
  }
  return (
    <>
      <button onClick={handleClick}>
        <LogIn size={20} strokeWidth={2} color="white" />
        <span>LogIn</span>
      </button>
    </>
  )
}
