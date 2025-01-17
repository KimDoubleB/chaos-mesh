/*
 * Copyright 2022 Chaos Mesh Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { FormControl, FormHelperText, FormLabel } from '@mui/material'

import type { FormControlProps as MuiFormControlProps } from '@mui/material'

export type FormControlProps = MuiFormControlProps & {
  label?: React.ReactNode
  helperText?: React.ReactNode
}

export default function ({ label, helperText, children, ...rest }: FormControlProps) {
  return (
    <FormControl {...rest}>
      {label && (
        <FormLabel
          disabled={false}
          error={false}
          focused={false}
          sx={{ mb: 1.5, color: 'text.primary', fontSize: 'body2.fontSize', fontWeight: 500 }}
        >
          {label}
        </FormLabel>
      )}
      {children}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
