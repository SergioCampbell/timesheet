import { screen, render } from '@testing-library/react';
import { describe, it } from 'node:test';
import React from 'react'

import app from '../app'

describe('Employee Timesheet', () => {
    it('display home screen', () => {
        render(<app />)
        expect(screen.queryByText(/employee/i)).toBeInTheDocument()
    })
})

