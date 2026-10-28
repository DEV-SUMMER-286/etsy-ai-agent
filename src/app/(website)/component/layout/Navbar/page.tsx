import Link from 'next/link';

export default function Header() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "12px", 
      padding: "15px", 
      backgroundColor: "#1e293b", 
      flexWrap: "wrap",
      alignItems: "center"
    }}>
      <Link href="/" style={{ color: "#ffffff", fontWeight: "bold", textDecoration: "none", padding: "5px 10px", backgroundColor: "#0284c7", borderRadius: "4px" }}>Home</Link>
      <Link href="/shop-analyzer" style={{ color: "#ffffff", textDecoration: "none" }}>Shop Analyzer</Link>
      <Link href="/product-research" style={{ color: "#ffffff", textDecoration: "none" }}>Product Research</Link>
      <Link href="/keyword-research" style={{ color: "#ffffff", textDecoration: "none" }}>Keyword Research</Link>
      <Link href="/competitor-research" style={{ color: "#ffffff", textDecoration: "none" }}>Competitor Research</Link>
      <Link href="/listing-analyzer" style={{ color: "#ffffff", textDecoration: "none" }}>Listing Analyzer</Link>
      <Link href="/optimizer" style={{ color: "#ffffff", textDecoration: "none" }}>Optimizer</Link>
      <Link href="/trend-detection" style={{ color: "#ffffff", textDecoration: "none" }}>Trend Detection</Link>
      <Link href="/analytics" style={{ color: "#ffffff", textDecoration: "none" }}>Analytics</Link>
      <Link href="/ai-recommendations" style={{ color: "#ffffff", textDecoration: "none" }}>AI Recommendations</Link>
      <Link href="/about" style={{ color: "#ffffff", textDecoration: "none" }}>About</Link>
    </nav>
  );
}