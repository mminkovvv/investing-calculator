export default function UserInput({ onChage, userInput }) {

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Ivestment</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => onChage("initialInvestment", event.target.value)}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => onChage("annualInvestment", event.target.value)}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => onChage("expectedReturn", event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) => onChage("duration", event.target.value)}
                />
            </p>
        </div>
    </section>
}