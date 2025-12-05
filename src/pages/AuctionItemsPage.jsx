import { useEffect, useState } from "react";
import { apiGet } from "../services/api";
import "./auctionItems.css"; // for styling

export default function AuctionItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet("https://dummyjson.com/users")
      .then((data) => {
        setItems(data.users);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch auction items");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 20 }}>Loading auctions…</div>;

  return (
    <div className="auction-container">
      {items.map((item) => (
        <div className="auction-card" key={item.id}>
          <img className="auction-img" src={item.image} alt={item.firstName} />

          <div className="auction-info">
            <h3>{item.firstName}</h3>

            <p><strong>Starting Price:</strong> ₹{item.height}</p>

            <p>
              <strong>Ends On:</strong>{" "}
              {new Date(item.endDate).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
