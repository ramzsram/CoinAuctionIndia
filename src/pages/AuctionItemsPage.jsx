import { useEffect, useState } from "react";
import { apiGet } from "../services/api";
import "./auctionItems.css"; // for styling

export default function AuctionItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

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
    <div className="auction-layout">
      
      {/* LEFT SIDE PANE */}
      <div className="left-pane">
        <h2>Marketplace</h2>

        <div className="menu-item selected">
          Auction Items
        </div>

        <div className="menu-item">
          My Bids
        </div>

        <div className="menu-item">
          Settings
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
      <div className="right-content">
        <div className="auction-container">
          {items.map((item) => (
                <div className="auction-card" key={item.id} onClick={() => setSelectedItem(item)}>
                <img className="auction-img" src={item.image} alt={item.firstName} />

                <div className="auction-info">
                    <h3>{item.firstName}</h3>

                    <p><strong>Starting Price:</strong> ₹{item.height}</p>

                    <p>
                    <strong>Ends On:</strong>{" "}
                    {new Date(item.birthDate).toLocaleString()}
                    </p>
                </div>
                </div>
            ))}
        </div>
      </div>

      {/* ================= MODAL OVERLAY ================= */}
      {selectedItem && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>

            <img
              className="modal-img"
              src={selectedItem.image}
              alt={selectedItem.firstName}
            />

            <h2 className="modal-title">{selectedItem.firstName}</h2>

            <p><strong>Starting Price:</strong> ₹{selectedItem.height}</p>
            <p><strong>Start Date:</strong> {new Date(selectedItem.birthDate).toLocaleString()}</p>
            <p><strong>End Date:</strong> {new Date().toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
