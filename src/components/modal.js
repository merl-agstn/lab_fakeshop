export function Modal(product) {
    const container = document.querySelector('#productModal');
    if (!container) {
        return;
    }

    const template = `
    <div class="modal-dialog modal-dialog-centered modal-md">
        <div class="modal-content rounded-4 shadow-sm">
            <div class="modal-header border-0">
                <div>
                    <h1 class="modal-title fs-5 mb-1" id="productModalLabel">${product.title}</h1>
                    <span class="text-muted small">${product.category}</span>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div class="modal-body pt-0">
                <div class="text-center mb-3">
                    <img src="${product.image}" alt="${product.title}" class="img-fluid rounded-3 border" style="max-height: 220px; object-fit: contain;">
                </div>
                <div class="text-end">
                    <p class="fw-semibold fs-4 text-success mb-1">$ ${product.price}</p>
                    <p class="text-muted small mb-3">Calificación: ${product.rating.rate} ★ (${product.rating.count} reseñas)</p>
                </div>
                <hr class="my-3">
                <p class="mb-0">${product.description}</p>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    </div>`;

    container.innerHTML = template;

    const bootstrapModal = new bootstrap.Modal(container);
    bootstrapModal.show();
}
