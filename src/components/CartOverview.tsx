import Button from './Button';

function CartOverview() {
  return (
    <section className="px-2 py-7 bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">My order</h2>
        <Button variant="secondarySm" href="/cart">
          Edit
        </Button>
      </div>
    </section>
  );
}

export default CartOverview;
