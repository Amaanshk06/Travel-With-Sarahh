function Client() {
    return (
        <section className="client-section">
            <div className="client-container">

                {/* Left Side Content */}
                <div className="client-content">
                    <h2>Embark on the Holiday of Your Dreams</h2>
                    <p>
                        From the moment you start dreaming, to long after you return, your
                        Travel with Sarah Advisor is your partner in crafting the most magical,
                        memorable getaway imaginable.
                    </p>

                    <h3>Your Journey Begins</h3>
                    <ol>
                        <li>
                            <strong>Connect With Your Perfect Match</strong>
                            <p>
                                Share your travel dreams, and we'll connect you with an
                                Travel with Sarah Advisor who specialises in bringing your specific
                                vision to life.
                            </p>
                        </li>
                        <li>
                            <strong>Watch the Magic Unfold</strong>
                            <p>
                                Delight in a personalised itinerary, infused with insider touches
                                and unbeatable value, as your advisor transforms your dreams into
                                reality.
                            </p>
                        </li>
                        <li>
                            <strong>Enjoy Unparalleled Peace of Mind</strong>
                            <p>
                                With your Travel with Sarah Advisor’s extensive support network and
                                our comprehensive travel protection, embark on your adventure
                                with absolute confidence and serenity.
                            </p>
                        </li>
                    </ol>

                    <p className="client-footer">
                        Seeking an opportunity to share your love of travel?{" "}
                        <a href="#">Learn About Becoming an Travel with Sarah Advisor</a>
                    </p>
                </div>

                {/* Right Side Form */}
                <div className="client-form">
                    <form>
                        <label>First name</label>
                        <input type="text" placeholder="First name" />

                        <label>Last name</label>
                        <input type="text" placeholder="Last name" />

                        <label>Email*</label>
                        <input type="email" placeholder="Email*" />

                        <label>Travel Type</label>
                        <select>
                            <option>Please Select</option>
                            <option>Adventure</option>
                            <option>Luxury</option>
                            <option>Family</option>
                        </select>

                        <label>Holiday Destination</label>
                        <select>
                            <option>Please Select</option>
                            <option>Maldives</option>
                            <option>Bali</option>
                            <option>Paris</option>
                        </select>

                        <label>Travel Duration</label>
                        <select>
                            <option>Please Select</option>
                            <option>1-3 Days</option>
                            <option>1 Week</option>
                            <option>2 Weeks</option>
                        </select>

                        <button type="submit">Get Started</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Client;
