export default function LayoutSidebarLeft() {
  return (
    <aside className="hidden lg:block bg-blue-600 relative min-w-sidebar">
      <div className="top-0 h-screen fixed bg-purple-600 pt-[80px]">
        <div className="h-full w-full overflow-y-auto">
          <div className="w-sidebar bg-orange-600 p-5">
            <div className="bg-purple-600">
              <figure className="h-[500px] bg-gray-500">AD SPACE</figure>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
