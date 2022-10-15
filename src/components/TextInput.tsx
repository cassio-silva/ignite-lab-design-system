import { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { }

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className={"flex h-12 items-center gap-3 w-full py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-500"}>
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInputComp.Root';

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInputComp.Icon';

function TextInput(props: TextInputProps) {
  return (
    <input
      {...props}
      className={'bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400'}
    />

  )
}

TextInput.displayName = 'TextInputComp.Input';

export const TextInputComp = {
  Root: TextInputRoot,
  Input: TextInput,
  Icon: TextInputIcon
}