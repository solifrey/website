import { render, screen, fireEvent } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import HowFailCard from '../HowFailCard'

expect.extend(toHaveNoViolations)

const mockProps = {
  title: "More control",
  description: "More governance, more KPIs, more steering committees. It feels safer, but actually deadens the organisation's sensitivity."
}

describe('HowFailCard Component', () => {
  it('renders the failure approach title', () => {
    render(<HowFailCard {...mockProps} />)
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })

  it('flips card when clicked', () => {
    render(<HowFailCard {...mockProps} />)
    
    const card = screen.getByText(mockProps.title).closest('div')
    fireEvent.click(card!)
    
    expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<HowFailCard {...mockProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
